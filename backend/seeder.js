import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import shops from './data/shops.js'
import categorys from './data/categorys.js'
import Shop from './models/shopModel.js'
import Category from './models/categoryModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () =>
{
    try {
        await Shop.deleteMany()
        await Category.deleteMany()
        await Category.insertMany(categorys)
        await Shop.insertMany(shops)
        console.log('Data Imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () =>
{
    try {
        await Shop.deleteMany()
        await Category.deleteMany()
        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}