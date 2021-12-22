import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import "../styles/Counter.css";
function Counter()
{
 
 
return(
<div className="counterParent">
    <div className="coffee">
        <CountUp end={10000} redraw={true} duration={2}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                
        </CountUp>
        <span>+</span>
        <div className="subText">Special Filter Coffee(per day) </div>
      </div>
      <div className="idly">
        <CountUp end={5000} redraw={true} duration={2}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                
        </CountUp>
        <span>+</span>
        <div className="subText">Idly sets(per day) </div>
      </div>
</div>
)
}
export default Counter;