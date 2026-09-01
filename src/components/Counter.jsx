import '../assets/css/Counter.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Counter() {
  const counts = [
    { title: 'Company Established', count: 2009 },
    { title: 'Projects Done', count: 225 },
    { title: 'Happy Clients', count: 150 },
    { title: 'Business Partners', count: 25 }
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='counter-gen-div' ref={ref}>
      <div className='counter-box'>
        {counts.map((item, indexItem) => (
          <div key={indexItem} className='counter-item'>
            <h1>
              {item.title === 'Company Established' ? (
                String(item.count)
              ) : (
                inView && (
                  <CountUp
                    start={0}              
                    end={item.count}       
                    duration={2.5}          
                    separator=''             
                    useEasing               
                  />
                )
              )}
            </h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
