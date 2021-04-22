const ProductTracker = artifacts.require('./ProductTracker.sol')

contract('ProductTracker', (accounts) => {
  before(async () => {
    this.productTracker = await ProductTracker.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.productTracker.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('lists products', async () => {
    const productCount = await this.productTracker.productCount()
    const product = await this.productTracker.products(productCount)
    assert.equal(product.id.toNumber(), productCount.toNumber())
    assert.equal(product.productName, 'Me')
    assert.equal(product.Manufacturer, 'God')
    assert.equal(productCount.toNumber(), 1)
    assert.equal(productCount.toNumber(), 1)
  })
  it('lists transits', async () => {
    const transitCount = await this.productTracker.transitCount()
    const transit = await this.productTracker.transitRecords(transitCount)
    assert.equal(transit.transitStatus, false)
    assert.equal(transit.To, 'Heaven')
  })
  it('adds products', async () => {
    const result = await this.productTracker.addNewProduct('Me2','God','Earth','Birth')
    const productCount = await this.productTracker.productCount()
    assert.equal(productCount, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.productName, 'Me2')
    assert.equal(event.Origin, 'Earth')
  })
  it('delivered logic applies', async () => {
    const result = await this.productTracker.transitUpdate(1,"Heaven","Heaven","Birth","Lifetime")
    const transit = await this.productTracker.transitRecords(2)
    assert.equal(transit.transitStatus, true)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 1)
    assert.equal(event.In, 'Lifetime')
  })
})