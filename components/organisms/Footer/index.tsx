/* eslint-disable import/no-unresolved */
import Image from 'next/image';
// eslint-disable-next-line import/extensions
import MenuFooter from './MenuFooter';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                  <MenuFooter title="About Us" />
                  <MenuFooter title="Press Release" />
                  <MenuFooter title="Terms Of Use" />
                  <MenuFooter title="Privacy & Policy" />
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                  <MenuFooter title="Refund Policy" />
                  <MenuFooter title="Unlock Rewards" />
                  <MenuFooter title="Live Chatting" />
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                  <MenuFooter title="hi@store.gg" />
                  <MenuFooter title="team@store.gg" />
                  <MenuFooter title="Pasific 12, Jakarta Selatan" />
                  <MenuFooter title="021 - 1122 - 9090" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
