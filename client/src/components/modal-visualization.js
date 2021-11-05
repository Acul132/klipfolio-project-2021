import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

const StyledModalContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 500;
`

const StyledModal = styled.div`
  width: 50vw;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5);

  h1 {
    margin: 1rem;
  }

`

const options = {
  scales: {
    xAxes: [{
      type: 'time'
    }]
  }
}

const ModalVisualization = ({data, title, close}) => {
  const [chartData, setChartData] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    if(data) {
      setChartData({
        labels: data.map(val => new Date(val.x).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })),
        datasets: [
          {
            label: title,
            backgroundColor: 'rgb(93, 213, 246)',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            borderColor: 'rgb(93, 213, 246)',
            pointRadius: 2,
            data: data.map(val => val.y),

          }
        ]
      })
    }
  }, [data, title]) //Update chart whenever Title or Data changes

 const handleClickOutside = (e) => {
    //Close modal if mouse click occurs with mouse not over the modal
    if (ref.current && !ref.current.contains(e.target)) {
      close()
    }
 }

  useEffect(() => {
    //Adding event listener (and cleanup) to be used in order to close the modal
    document.addEventListener('click', handleClickOutside)
    return () => {
      return document.removeEventListener('click', handleClickOutside)
    }
  }, [])


  return (
    <StyledModalContainer isOpen={true}>
      <StyledModal ref={ref}>
        <h1>{title}</h1>
        {chartData && <Line data={chartData} options={options}/>}
      </StyledModal>
    </StyledModalContainer>
  )

}

export default ModalVisualization