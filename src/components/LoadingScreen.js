import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function LoadingScreen() {

  return (
    <section className="loadingScreen">
      <LoadingSpinner />
      <h3>Loading..</h3>
    </section>
  );
};
