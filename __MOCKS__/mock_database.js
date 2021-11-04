
const mockServices = [
    {name: "Facebook"},
    {name: "Google"},
    {name: "Apple"},
    {name: "Google Adsense"},
    {name: "Mailchip"},
    {name: "Josh"},
    {name: "Dropbox"},
    {name: "Slack"}
]

const mockDataSources = [
    {title: "Sales Target"},
    {title: "Lead"},
]

const mockSearchOptions = [
    {title: "Sales Target", category: "Data Source"},
    {title: "Lead", category: "Data Source"},
    {title: "Facebook", category: "Service"},
    {title: "Google", category: "Service"},
    {title: "MMR", category: "Visualization"},
    {title: "Followers", category: "Visualization"}
]

const mockVis = [
    {
        title: "MRR",
        suffix: "",
        prefix: "$",
        period: 14,
        max: 90000,
        min: 50000
    },
    {
        title: "Followers",
        suffix: "Users",
        prefix: "",
        period: 10,
        max: 120,
        min: 80
    }
]


const MockDatabase = {
    fetchVisualizations: jest.fn(() => Promise.resolve(mockVis)),
    fetchServices: jest.fn(() => Promise.resolve(mockServices)),
    fetchDataSources: jest.fn(() => Promise.resolve(mockDataSources)),
    fetchSearchOptions: jest.fn(() => Promise.resolve(mockSearchOptions))
}

module.exports = MockDatabase