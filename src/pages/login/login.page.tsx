import { FunctionComponent } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import validator from 'validator'

// Components
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styes'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../config/firebase.config'

interface LoginForm {
  email: string
  password: string
}

const LoginPage: FunctionComponent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<LoginForm>()

  const handleSubmitPress = async (data: LoginForm): Promise<void> => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      console.log(userCredentials)
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' })
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' })
      }
    }
  }

  return (
    <>
      <Header blackBackground={true} />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>
          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={errors.email != null}
              placeholder="Entre com a sua conta"
              {...register('email', {
                required: true,
                validate: (value) => validator.isEmail(value)
                // validate precisa retornar um boolean
                // true se for válido, false se for inválido
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O email é obrigatório</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Digite um email válido</InputErrorMessage>
            )}

            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>Email incorreto</InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={errors.password != null}
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
              type="password"
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>Senha incorreta</InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
