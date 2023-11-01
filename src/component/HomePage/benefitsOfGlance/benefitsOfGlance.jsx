import styles from "./benefitsOfGlance.css";

const benefitsOfGlance = () => {
  return (
    <div className="yourNewClassName">
      {" "}
      {/* Replace "yourNewClassName" with your desired class name */}
      <div className="groupWrapper">
        <div className="yourBenefitsAtAGlanceWrapper">
          <div className="yourBenefitsAt">Your Benefits At a Glance</div>
        </div>
      </div>
      <div className="rectangleParent">
        <div className="groupChild" />
        <div className="yourBenefitsAt1">Your Benefits At a Glance</div>
        <div className="groupContainer">
          <div className="rectangleGroup">
            <div className="groupItem" />
            <div className="groupDiv">
              <img className="groupInner" alt="" src="/group-1000003580.svg" />
              <div className="checksParent">
                <div className="checks">250+ Checks</div>
                <div className="year12Months">
                  1 year (12 months) extended warranty for your appliance after
                  your manufacturer's warranty
                </div>
              </div>
            </div>
          </div>
          <div className="checksGroup">
            <b className="checks1">250+ Checks</b>
            <div className="groupItem" />
            <img className="groupIcon" alt="" src="/group-1000003581.svg" />
            <div className="getServiceCParent">
              <div className="checks">{`Get Service & C`}</div>
              <div className="noOneKnows">
                No one knows your equipment better than our professionally
                trained engineers
              </div>
            </div>
          </div>
          <div className="rectangleContainer">
            <div className="groupItem" />
            <img className="groupIcon" alt="" src="/group-10000035801.svg" />
            <div className="deliveredToYouParent">
              <div className="checks">Delivered to you</div>
              <div className="noChargesFor">
                No charges for inspection fee, labor cost, or parts replacement
              </div>
            </div>
          </div>
          <div className="rectangleParent1">
            <div className="groupItem" />
            <img className="groupIcon" alt="" src="/group-10000035811.svg" />
            <div className="deliveredToYouParent">
              <div className="checks">Financial Support</div>
              <div className="noOneKnows">
                Be assured that only genuine original parts are used
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="groupParent1">
        <div className="youCanRestEasyKnowingYouParent">
          <div className="youCanRest">
            You can rest easy knowing you won't have to worry about expensive
            repairs and out-of-pocket costs. It's the perfect way to protect
            your investment both now and in the future.
          </div>
          <div className="amcAnnual">AMC (Annual Maintenance Contract)</div>
          <div className="origaServiceParent">
            <div className="origaService">{`Origa Service `}</div>
            <img className="groupChild5" alt="" src="/group-40321.svg" />
          </div>
        </div>
        <div className="buttonsWrapper">
          <div className="buttons">
            <div className="add" />
            <div className="exploreAmcPlans">Explore AMC Plans</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default benefitsOfGlance;
