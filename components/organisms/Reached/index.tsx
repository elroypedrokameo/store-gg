/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import ReachedItem from '../../molecules/ReachedItem';
import LineReached from '../../molecules/ReachedItem/LineReached';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem title="290M+" desc="Players Top Up" />
          <LineReached />
          <ReachedItem title="12.500" desc="Games Available" />
          <LineReached />
          <ReachedItem title="99,9%" desc="Happy Players" />
          <LineReached />
          <ReachedItem title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
