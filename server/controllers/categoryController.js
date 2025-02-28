import slugify from "slugify";
import categoryModel from "../models/categoryModel.js"

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(401).send({ message: 'name is require' });
        }
        const exisitingCategory = await categoryModel.findOne({ name });
        if (exisitingCategory) {
            return res.status(200).send({
                success: true,
                message: "category allready exisits"
            });
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            seccess: true,
            message: "new category created", category
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in category",
            error
        })

    }
}

//update category 

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
        res.status(200).send({
            success: true,
            message: "category updated",
            category

        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in updateing category",
            error
        })
    }
}

// get all category
export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});

        res.status(200).send({
            success: true,
            message: "All category list",
            category
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "can't get all category",
            error
        })

    }
}

//get single category

export const singleCategoryController = async (req, res) => {

    try {

        const category = await categoryModel.findOne({ slug: req.params.slug });
        if (!category) {
            return (
                res.status(500).send({
                    success: false,
                    message: "this category des'not exisit"

                })
            );
        }
        res.status(200).send({
            success: true,
            message: "category get successfully",
            category
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in geting category",
            error
        })

    }

}// delete category
export const deleteCategorycontroller = async (req, res) => {
    try {
        const { id } = req.params
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "category delete successfully"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in deleteing category",
            error
        })

    }
}