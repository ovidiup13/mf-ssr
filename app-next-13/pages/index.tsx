import { Fragment, Suspense, lazy } from 'react';
// import dynamic from 'next/dynamic';

const Header = lazy(() => import('toolkit/Header'));

export default function Home() {
  return (
    <Fragment>
      <Suspense fallback={'Loading'}>
        <Header />
      </Suspense>
      <h1>Hello, Next 13 App 👋🏻</h1>
    </Fragment>
  );
}
