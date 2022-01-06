/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import Footer from './Footer';
// eslint-disable-next-line import/no-unresolved
import MenuItem from './MenuItem';
// eslint-disable-next-line import/no-unresolved
import Profile from './Profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" active={activeMenu === 'overview'} href="/member" />
          <MenuItem title="Transactions" icon="ic-menu-transactions" active={activeMenu === 'transactions'} href="/member/transactions" />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
          <MenuItem title="Setting" icon="ic-menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile" />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
