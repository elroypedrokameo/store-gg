/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import OverviewContent from '../../components/organisms/OverviewContent';
// eslint-disable-next-line import/no-unresolved
import Sidebar from '../../components/organisms/Sidebar';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
