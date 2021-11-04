import DataCard from 'components/data-card'
import { useDataSources } from 'hooks/use-data-sources.js';
import Spinner from 'components/spinner.js';


const DataSourcesLoader = ({limit = 6}) => {
  const {isLoading, data, error} = useDataSources(limit);
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && data && 
        data.titles.map(({title}, index) => 
          <DataCard key={`${title}-${index}`} title={title}/>
        )
      }
      {!isLoading && error && <div>Error loading data sources</div>}
    </>
  )
}

export default DataSourcesLoader;