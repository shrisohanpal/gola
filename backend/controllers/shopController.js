import asyncHandler from 'express-async-handler'
import Shop from '../models/shopModel.js'

// @desc    Fetch all shops
// @route   GET /api/shops
// @access  Public
const getShops = asyncHandler(async (req, res) =>
{
    const shops = await Shop.find({})
    res.json({ shops })
})

// @desc    Fetch single shop
// @route   GET /api/shops/:id
// @access  Public
const getShopById = asyncHandler(async (req, res) =>
{
    const shop = await Shop.findById(req.params.id)

    if (shop) {
        res.json(shop)
    } else {
        res.status(404)
        throw new Error('Shop not found')
    }
})

// @desc    Delete a shop
// @route   DELETE /api/shops/:id
// @access  Private
const deleteShop = asyncHandler(async (req, res) =>
{
    const shop = await Shop.findById(req.params.id)

    if (shop) {
        await shop.remove()
        res.json({ message: 'Shop removed' })
    } else {
        res.status(404)
        throw new Error('Shop not found')
    }
})

// @desc    Create a shop
// @route   POST /api/shops
// @access  Private
const createShop = asyncHandler(async (req, res) =>
{
    const shop = new Product({
        name: 'Sample name',
        user: req.user._id,
        description: 'Sample description',
    })

    const createdShop = await shop.save()
    res.status(201).json(createShop)
})

// @desc    Update a shop
// @route   PUT /api/shops/:id
// @access  Private
const updateShop = asyncHandler(async (req, res) =>
{
    const {
        name,
        description,
        image
    } = req.body

    const shop = await Shop.findById(req.params.id)

    if (shop) {
        shop.name = name
        shop.description = description
        shop.image = image

        const updatedShop = await shop.save()
        res.json(updatedShop)
    } else {
        res.status(404)
        throw new Error('Shop not found')
    }
})


export
{
    getShops,
    getShopById,
    deleteShop,
    createShop,
    updateShop
}