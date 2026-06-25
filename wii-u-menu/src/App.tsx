/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { FirstBootSetup } from './components/FirstBootSetup';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [firstBootDone, setFirstBootDone] = useState(
    () => localStorage.getItem('wiiuFirstBootComplete') === 'true'
  );

  return (
    <>
      {!firstBootDone ? (
        <FirstBootSetup
          onComplete={() => setFirstBootDone(true)}
        />
      ) : (
        <WelcomeScreen
          onStart={() => {}}
          onResetFirstBoot={() => setFirstBootDone(false)}
        />
      )}
      <CustomCursor />
    </>
  );
}
