import styled, {css} from 'styled-components'
import { Line } from 'react-chartjs-2';
import { ReactComponent as UpArrow } from 'assets/up-arrow.svg'
import { useEffect, useRef, useState } from 'react';
import ModalVisualization from 'components/modal-visualization'

const options = {
  scales: {
    y: {
      display: false,
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
      }
    },
    x: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  tooltips: {
    enabled: false
  }
};

const StyledChardContainer = styled.div`
  position: absolute;
  bottom: 0;

  canvas {
    height: calc(120px / 3) !important;
    width: ${(props) => props.width || 220}px !important;
  }
`

const StyledVisualizationCard = styled.div`
  position: relative;
  width: 220px;
  height: 120px;
  background-color: white;
  box-shadow: 4px 4px 16px rgba(0,0,0,0.20);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;

  :hover {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.4);
  }

  :active {
    transform: translateY(3px);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  }
`

const StyledVisualizationContainer = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
`

const StyledVisualizationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledVisualizationValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

const StyledVisualizationHeader = styled.div`
  margin-bottom: 0.5rem;
`

const StyledVisualizationPrevious = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -1rem;
  p {
    font-size: 0.5rem;
    color: #828282;
    text-align: center;
  }
  div {
    text-align: center;
    ${props => props.trendingUp ? css`
      color: rgb(52, 173, 120);
      fill: #34ad78;
    ` 
    :
    css`
      color: #E41B50;
      fill: #E41B50;

      svg {
        transform: rotate(180deg);
      }
    `}
    
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.4px;
  }
`

const Visualization = ({title, value, diff, data, period}) => {

  const [width, setWidth] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const ref = useRef()
  const diffNumber = Number.parseFloat(diff)
  const trendingUp = diffNumber >= 0
  const previous = !trendingUp ? diffNumber * -1 : diffNumber

  const chartData = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, 'rgba(93, 213, 246, 0.3)');   
    gradient.addColorStop(1, 'rgba(93, 213, 246, 0)');
  
    return {
      labels: data.map(val => val.x),
      datasets: [
        {
          backgroundColor: gradient,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          borderColor: 'rgb(93, 213, 246)',
          pointRadius: 0,
          data: data.map(val => val.y),
        }
      ]
    }
  }

  const handleResize = () => {
    setWidth(ref.current.offsetWidth)
  }

  const openViz = () => {
    if(!showModal) {
      setShowModal(true)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <StyledVisualizationCard ref={ref} onClick={openViz}>
        <StyledVisualizationContainer>
          <StyledVisualizationHeader>
            {title}
          </StyledVisualizationHeader>
          <StyledVisualizationGrid>
            <StyledVisualizationValue>
              {value}
            </StyledVisualizationValue>
            <StyledVisualizationPrevious trendingUp={trendingUp}>
              <div><UpArrow width={"12px"} height={"12px"}/>{previous}%</div>
              <p>vs previous {period} days</p>
            </StyledVisualizationPrevious>
          </StyledVisualizationGrid>
        </StyledVisualizationContainer>
        <StyledChardContainer  width={width}>
          <Line data={chartData} options={options} />
        </StyledChardContainer>
      </StyledVisualizationCard>
        {showModal && <ModalVisualization title={title} data={data} close={() => {setShowModal(false)}}/>}
      </>

  )
} 

export default Visualization