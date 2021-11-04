import Visualization from 'components/visualization.js';
import { useVisualizations } from 'hooks/use-visualizations.js';
import Spinner from 'components/spinner.js';


const VisualizationsLoader = ({limit = 6}) => {
  const {isLoading, data, error} = useVisualizations(limit);
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && data && 
        data.visualizations.map((vis, index) => 
          <Visualization
            key={`${vis.title}-${index}`} 
            data={vis.data} 
            title={vis.title} 
            value={`${vis.prefix}${vis.displayValue}${vis.suffix}`} 
            diff={Number.parseFloat(vis.changePercentage).toFixed(2)}
            period={vis.period}
          />
        )
      }
      {!isLoading && error && <div>Error loading Visualizations</div>}
    </>
  )
}

export default VisualizationsLoader;