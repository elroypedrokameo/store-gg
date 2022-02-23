/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import SignUpForm from '../components/organisms/SignUpForm';

export default function SignUp() {
  return (
    <>
      <section className="sign-up mx-auto pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link href="/">
                <a className="navbar-brand">
                  <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                </a>
              </Link>
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
}
