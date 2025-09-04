import { Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Landing(props) {
  return (
    <div className='middle-center'>
      <h1 className='landing logo'>Basketball Versus App</h1>
      <ButtonGroup>
        <LinkContainer to='/sign-up'>
          <Button data-cy="signUp">Sign up</Button>
        </LinkContainer>
        <LinkContainer to='/log-in'>
          <Button data-cy="logIn">Log in</Button>
        </LinkContainer>
      </ButtonGroup>
    </div>
  );
}

export default Landing;