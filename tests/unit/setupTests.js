export default function() {
  jest.mock("axios", () => ({
    create: jest.fn()
  }))
}