import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    history.push('/docusaurus-personal-starter-kit/docs/intro');
  }, [history]);

  return (<></>);
}