import VisualizationsLoader from 'components/visualizations-loader'
import { act } from "react-dom/test-utils";
import Spinner from 'components/spinner';
import Visualization from 'components/visualization'

import {mount} from 'enzyme'

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve));
    wrapper.update();
  });
};


beforeEach(() => {
  fetch.resetMocks();
});

it("Visualization loader renders 2 visualization components", async () => {
  fetch.mockResponseOnce(JSON.stringify({ visualizations: [
    {
      "period": 14,
      "title": "Revenue",
      "suffix": "K",
      "prefix": "",
      "data": [
          { "x": "2021-10-23T00:43:00.693Z", "y": 392},
          {"x": "2021-10-24T00:43:00.693Z", "y": 320},
          { "x": "2021-10-25T00:43:00.693Z", "y": 387},
          {"x": "2021-10-26T00:43:00.693Z", "y": 204},
          {"x": "2021-10-27T00:43:00.693Z", "y": 307},
          {"x": "2021-10-28T00:43:00.693Z","y": 269},
          {"x": "2021-10-29T00:43:00.693Z","y": 390},
          {"x": "2021-10-30T00:43:00.693Z", "y": 278},
          {"x": "2021-10-31T00:43:00.693Z", "y": 326},
          { "x": "2021-11-01T00:43:00.693Z","y": 232},
          {"x": "2021-11-02T00:43:00.693Z","y": 319},
          {"x": "2021-11-03T00:43:00.693Z","y": 301},
          {"x": "2021-11-04T00:43:00.693Z","y": 381},
          {"x": "2021-11-05T00:43:00.693Z","y": 395}
      ],
      "displayValue": 392,
      "changePercentage": 0.7623888182973316
    },
    {
      "period": 14,
      "title": "Revenue",
      "suffix": "K",
      "prefix": "",
      "data": [
          { "x": "2021-10-23T00:43:00.693Z", "y": 392},
          {"x": "2021-10-24T00:43:00.693Z", "y": 320},
          { "x": "2021-10-25T00:43:00.693Z", "y": 387},
          {"x": "2021-10-26T00:43:00.693Z", "y": 204},
          {"x": "2021-10-27T00:43:00.693Z", "y": 307},
          {"x": "2021-10-28T00:43:00.693Z","y": 269},
          {"x": "2021-10-29T00:43:00.693Z","y": 390},
          {"x": "2021-10-30T00:43:00.693Z", "y": 278},
          {"x": "2021-10-31T00:43:00.693Z", "y": 326},
          { "x": "2021-11-01T00:43:00.693Z","y": 232},
          {"x": "2021-11-02T00:43:00.693Z","y": 319},
          {"x": "2021-11-03T00:43:00.693Z","y": 301},
          {"x": "2021-11-04T00:43:00.693Z","y": 381},
          {"x": "2021-11-05T00:43:00.693Z","y": 395}
      ],
      "displayValue": 392,
      "changePercentage": 0.7623888182973316
  }
  ]}));

  const component = mount(
    <VisualizationsLoader/>,
  );

  expect(component.find(Spinner).length).toBe(1);

  await waitForComponentToPaint(component);

  expect(component.find(Visualization).length).toBe(2);
});

it("Visualization displays error text on API error response", async () => {
  fetch.mockReject(() => Promise.reject("API is down"));

  const component = mount(
    <VisualizationsLoader/>,
  );

  await waitForComponentToPaint(component);

  expect(component.text()).toEqual("Error loading Visualizations");

  expect(fetch).toHaveBeenCalledWith(
    `http://localhost:3001/api/visualizations/6`
  );
});