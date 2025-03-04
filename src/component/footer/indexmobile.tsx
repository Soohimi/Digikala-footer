import './footermobile.scss';

function Mobile() {
  return (
    <footer>
        <div className="first-layerm">
            <p className='first-layerm-left'>باز گشت به بالا</p>
        </div>
        <div className="second-layerm">
            <div className="second-layerm-up">
                <div className="up-right">
                    <img src='../../../public/logo/support-icon-md.png' alt='support logo'></img>
                    <div className="second-layerm-parts">
                        <h1>تماس با پشتیبانی</h1>
                        <p>۷ روز هفته،۲۴ساعت</p>
                    </div>
                </div>
                <div className="up-left">
                    <button>تماس</button>
                </div>
            </div>
            <div className="second-layerm-down">
                <div className="down-right">
                    <img src='../../../public/logo/footerlogo2.webp' alt='footer logo'></img>
                    <div className="second-layerm-parts">
                        <h1>اپلیکیشن دیجی‌کالا</h1>
                        <p>تجربه خرید بهترین در</p>
                    </div>
                </div>
                <div className="down-left">
                    <button>دانلود</button>
                </div>
            </div>
        </div>
    </footer>
)
}

export default Mobile