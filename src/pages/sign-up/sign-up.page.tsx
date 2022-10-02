import { FunctionComponent } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import {
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  AuthError
} from 'firebase/auth'

// Components
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

// Styles
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.styles'

// Utilities
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

interface SignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const SignUpPage: FunctionComponent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress = async (data: SignUpForm): Promise<void> => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email
      })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError('email', { type: 'alreadyInUse' })
      }
    }
  }

  return (
    <>
      <Header blackBackground={true} />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={errors.firstName != null}
              placeholder="Digite seu nome"
              {...register('firstName', { required: true })}
            />

            {errors?.firstName?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={errors.lastName != null}
              placeholder="Digite seu sobrenome"
              {...register('lastName', { required: true })}
            />

            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Email</p>
            <CustomInput
              hasError={errors.email != null}
              placeholder="Digite seu email"
              {...register('email', {
                required: true,
                validate: (value) => validator.isEmail(value)
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O email é obrigatório</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Digite um email válido</InputErrorMessage>
            )}

            {errors?.email?.type === 'alreadyInUse' && (
              <InputErrorMessage>Email já em uso</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={errors.password != null}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true, minLength: 6 })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}

            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>Mínimo de 6 caracteres</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação da senha</p>
            <CustomInput
              hasError={errors.confirmPassword != null}
              placeholder="Confirme sua senha"
              type="password"
              {...register('confirmPassword', {
                required: true,
                validate: (value) => value === watchPassword
              })}
            />

            {errors?.confirmPassword?.type === 'required' && (
              <InputErrorMessage>
                A confirmação da senha é obrigatória
              </InputErrorMessage>
            )}

            {errors?.confirmPassword?.type === 'validate' && (
              <InputErrorMessage>As senhas não são iguais</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
