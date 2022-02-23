/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Image from 'next/image';
import Auth from './Auth';
// eslint-disable-next-line import/no-unresolved
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-20 pb-lg-20 pt-10 pb-10">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Image src="/icon/logo.svg" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active href="/" />
              <Menu title="Games" href="/games" />
              <Menu title="Rewards" href="/rewards" />
              <Menu title="Discover" href="/discover" />
              <Menu title="Global Rank" href="/global-rank" />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
