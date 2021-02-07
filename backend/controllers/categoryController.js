import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @desc    Fetch all categorys
// @route   GET /api/categorys
// @access  Public
const getCategorys = asyncHandler(async (req, res) =>
{
    const categorys = await Category.find({})
    res.json({ categorys })
})

// @desc    Fetch single category
// @route   GET /api/caterorys/:id
// @access  Public
const getCategoryById = asyncHandler(async (req, res) =>
{
    const category = await Category.findById(req.params.id)

    if (category) {
        res.json(category)
    } else {
        res.status(404)
        throw new Error('Category not found')
    }
})

// @desc    Delete a category
// @route   DELETE /api/categorys/:id
// @access  Private Admin
const deleteCategory = asyncHandler(async (req, res) =>
{
    const category = await Category.findById(req.params.id)

    if (category) {
        await category.remove()
        res.json({ message: 'Category removed' })
    } else {
        res.status(404)
        throw new Error('Category not found')
    }
})

// @desc    Create a category
// @route   POST /api/categorys
// @access  Private Admin
const createCategory = asyncHandler(async (req, res) =>
{
    const category = new Category({
        name: 'Sample name'
    })

    const createdCategory = await category.save()
    res.status(201).json(createdCategory)
})

// @desc    Update a category
// @route   PUT /api/categorys/:id
// @access  Private Admin
const updateCategory = asyncHandler(async (req, res) =>
{
    const {
        name
    } = req.body

    const category = await Category.findById(req.params.id)

    if (category) {
        category.name = name

        const updatedCategory = await category.save()
        res.json(updatedCategory)
    } else {
        res.status(404)
        throw new Error('Category not found')
    }
})


export
{
    getCategorys,
    getCategoryById,
    deleteCategory,
    createCategory,
    updateCategory
}