import LoginForm from './components/LoginForm'
import Theme from './components/Theme'
import { ParticleBackground } from '../../components/ParticleBackground/index'

import './index.less'
export default function Login() {
    return (
        <>
            <Theme />
            <div className="login-bg">
                <ParticleBackground />
            </div>
            <div className="login-container">
                <div className="login-content">
                    <div className="login-inner">
                        <p className="text-[28px] font-black pt-[10px] pb-[16px]">管理系统</p>
                        {/* <p className="!text-[16px] font-black">CG-Admin</p> */}
                    </div>
                    <div className="login-form-content">
                        <div className="login-logo">
                            <div>
                                <p className="login-form-title">Admin</p>
                            </div>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}
