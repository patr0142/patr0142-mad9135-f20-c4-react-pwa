import React, { useEffect, useState } from "react";
import './InstallPWA.css';

const InstallPWA = () => {
  console.log("In InstallPWA")

  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // window.addEventListener('appinstalled', (event) => {
    //     console.log('app-installed', event);
    //     setSupportsPWA(false)
    // });

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
    promptInstall.userChoice.then( choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
          setSupportsPWA(false)
        } else {
          console.log('User dismissed the A2HS prompt')
        }
      })
  };

  
  if (!supportsPWA) {
    return null;
  }

  return (
      <div className="InstallPWA">
        <button
            id="install-prompt-button"
            aria-label="Install app"
            title="Install app"
            onClick={onClick}>
                Install
        </button>
      </div>
  );
};

export default InstallPWA;
