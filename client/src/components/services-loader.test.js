import ServicesLoader from 'components/services-loader'
import { act } from "react-dom/test-utils";
import Spinner from 'components/spinner';
import DataCard from 'components/data-card';

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

it("fires service", async () => {
  fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));

  const component = mount(
    <ServicesLoader/>,
  );

  expect(component.find(Spinner).length).toBe(1);

  await waitForComponentToPaint(component);

  expect(component.find(DataCard).length).toBe(6);

});

it("Returns fails", async () => {
  fetch.mockReject(() => Promise.reject("API is down"));

  const component = mount(
    <ServicesLoader/>,
  );

  await waitForComponentToPaint(component);

  expect(component.text()).toEqual("Error loading data sources");

  expect(fetch).toHaveBeenCalledWith(
    `http://localhost:3001/api/services/6`
  );
});