import React,{useState} from 'react';
import Grid  from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import './login.scss';
import instagram_img from '../../images/9364675fb26a.svg';
import instagram_logo from '../../images/logoinsta.png';
import facebook_img from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
        email:'',
        password:'',
  });

  const {email,password} = user;

  const onInputChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value});
  }

  const googleClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.instagram.android&hl=ko&gl=US','_blank');
  };

  const appleClick = () => {
    window.open('https://apps.apple.com/kr/app/instagram/id389801252','_blank')
  };

  return (
    <div className="container">
      <Grid container>

        <Grid item xs={1}>
        </Grid>

        <Grid item xs={3}>
            <div className="loginpage-main">
              <div>
                  <img src={instagram_img} width="450"/>
              </div>
            </div>
        </Grid>

        <Grid item xs={2}>
         </Grid>

         <Grid item xs={3}>
         <div className="loginpage-rightcomponent">
                        <img className="loginpage-logo" src={instagram_logo} />

                        <form action="/">
                        <div className="loginpage-signin">
                             <input
                                type="text"
                                name="email"
                                className="loginpage-text"
                                placeholder="이메일을 입력하세요"
                                onChange={(e) => onInputChange(e)}/>

                             <input
                                type="password"
                                name="password"
                                className="loginpage-text"
                                placeholder="비밀번호를 입력하세요"
                                onChange={(e) => onInputChange(e)}/>
                             <button type="submit" className="login-button">로그인</button>
                        </div>
                        </form>

                        <div className="login-ordiv">
                            <div className="divide-left"></div>
                            <div className="login-or">또는</div>
                            <div className="divide-right"></div>
                        </div>

                        <div className="login-fb">
                             <img src={facebook_img} width="15px" style={{"marginRight":"5px"}} />페이스북으로 로그인
                        </div>

                        <div className="login-forgot">
                             <a href="#">비밀번호를 잊으셨나요?</a>
                        </div>
                    </div>

                    <div className="loginpage-signupoption">
                         <div className="loginpage-signin">
                             회원이 아니신가요? <Link to="/signup">계정을 생성하세요!</Link>
                         </div>
                         <div className="loginpage-downloadSection">
                             <div>
                                 앱을 다운로드하세요.
                             </div>
                         </div>
                    </div>

                    <div className="loginpage-option">
                         <img className="loginpage-dwimg" src={playstore} onClick={googleClick} width="136px"/>
                         <img className="loginpage-dwimg" src={appstore} onClick={appleClick} width="136px"/>
                    </div>
         </Grid>
      </Grid>
    </div>
  )
}

export default Login;