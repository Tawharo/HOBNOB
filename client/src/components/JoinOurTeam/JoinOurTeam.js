import React from "react";
import Logo from "./../Logo";
import "./style.css";

function JoinOurTeam() {
  return (
    <div>
      <Logo />
      <div className="container-team">
        <h3>NOW HIRING!</h3>
        <p>
          Are you a self-motivated, hardworking, problem-solving go-getter with
          a passion for customer service and a team-oriented approach to work?
          Pay is competitive, hours are sensible, and we pride ourselves on
          serving delicious food at reasonable prices in a warm and welcoming
          environment.{" "}
        </p>

        <div class="row">
          <div class="col m3">Line Cook</div>
          <div class="col m6">
            We’re looking for an experienced line cook with an attention to
            detail, a positive attitude, and a drive to do better every single
            day. The ideal candidate will have a passion for seasonal food who
            can learn quickly; A reliable team-player is a must!
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div class="row">
          <div class="col m3">Server/Bartender</div>
          <div class="col m6">
            All front of the house positions are currently filled.
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div class="row">
          <div class="col m3">Host/Hostess</div>
          <div class="col m6">
            All front of the house positions are currently filled.
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div class="row">
          <div class="col m3">How to Apply</div>
          <div class="col m6">
            Email your resume to{" "}
            <a href="eat@hobnobrva.com">eat@hobnobrva.com</a> or call us at
            804-264-7400, Monday-Saturday, between 10am-2pm.
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinOurTeam;
