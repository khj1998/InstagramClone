import React from 'react';
import Grid  from '@material-ui/core/Grid';
import instagram_img from '../../images/9364675fb26a.svg';
import instagram_logo from '../../images/logoinsta.png';
import facebook_img from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

const Login = () => {
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
                        <div className="loginpage-signin">
                             <input type="text" className="loginpage-text" placeholder="핸드폰 번호,이메일을 입력하세요" />
                             <input type="password" className="loginpage-text" placeholder="password" />
                             <button className="login-button">로그인</button>
                        </div>

                        <div className="login-ordiv">
                            <div className="divide-left"></div>
                            <div className="login-or">또는</div>
                            <div className="divide-right"></div>
                        </div>

                        <div className="login-fb">
                             <img src={facebook_img} width="15px" style={{"marginRight":"5px"}} />페이스북으로 로그인
                        </div>

                        <div className="login-forgot">
                             비밀번호를 잊으셨나요?
                        </div>
                    </div>

                    <div className="loginpage-signupoption">
                         <div className="loginpage-signin">
                             회원이 아니신가요? 계정을 생성하세요!
                         </div>
                         <div className="loginpage-downloadSection">
                             <div>
                                 앱을 다운로드하세요.
                             </div>
                         </div>
                    </div>

                    <div className="loginpage-option">
                         <img className="loginpage-dwimg" src={appstore} width="136px"/>
                         <img className="loginpage-dwimg" src={playstore} width="136px"/>
                    </div>
         </Grid>
      </Grid>
    </div>
  )
}

export default Login;