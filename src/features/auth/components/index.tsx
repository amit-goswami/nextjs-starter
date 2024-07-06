import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { LoginComponent } from './login'
import { RegisterComponent } from './register'

type getRenderComponentProps = {
  isLoginTabActive: boolean
  setIsLoginTabActive: (value: boolean) => void
}

type tabComponentProps = {
  setIsLoginTabActive: (value: boolean) => void
}

const LoginTabComponent = ({ setIsLoginTabActive }: tabComponentProps) => {
  return (
    <Container>
      <Container className="mb-8">
        <LoginComponent />
      </Container>
      <Container className="text-center flex items-center justify-center gap-2">
        <p className="text-sm text-gray-600">Don&apos;t have an account?</p>
        <Button onClick={() => setIsLoginTabActive(false)} btnText="Register" />
      </Container>
    </Container>
  )
}

const RegisterTabComponent = ({ setIsLoginTabActive }: tabComponentProps) => {
  return (
    <Container>
      <Container className="mb-8">
        <RegisterComponent />
      </Container>
      <Container className="text-center flex items-center justify-center gap-2">
        <p className="text-sm text-gray-600">Already have an account?</p>
        <Button onClick={() => setIsLoginTabActive(true)} btnText="Login" />
      </Container>
    </Container>
  )
}

const getRenderComponent = ({
  isLoginTabActive,
  setIsLoginTabActive
}: getRenderComponentProps) => {
  switch (isLoginTabActive) {
    case true:
      return <LoginTabComponent setIsLoginTabActive={setIsLoginTabActive} />
    case false:
      return <RegisterTabComponent setIsLoginTabActive={setIsLoginTabActive} />
    default:
      return <LoginTabComponent setIsLoginTabActive={setIsLoginTabActive} />
  }
}

export default getRenderComponent
