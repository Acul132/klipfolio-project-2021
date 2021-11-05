import Service from 'components/service.js';
import { useServices } from 'hooks/use-services.js';
import Spinner from 'components/spinner.js';


const ServicesLoader = ({limit = 6}) => {
  //Fetch Services data and current status/error
  const {isLoading, data, error} = useServices(limit);
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && data && 
        data.names.map(({name}, index) => 
          <Service key={`${name}-${index}`} name={name}/>
        )
      }
      {!isLoading && error && <div>Error loading services</div>}
    </>
  )
}

export default ServicesLoader;