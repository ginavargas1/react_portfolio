import React from "react";
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function Footer() {
  return (
    <footer className="container" id="additional-links">
       <h4 className="display-6 text-center">Additional Links</h4>
       <div id="footer-links">
           <Button circular color="linkedin" icon="linkedin" as="a" href="https://www.linkedin.com/in/ginavargas89/" />
              
           <Button circular color="black" icon="github" as="a" href="https://github.com/ginavargas1" />
       </div>
       <br/>
     </footer>
  );
}

export default Footer;