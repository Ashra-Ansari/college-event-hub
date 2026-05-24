const Joi = require("joi");
const review = require("./models/review");

const eventSchema = Joi.object({
  event: Joi.object({
    title: Joi.string().required().trim(),

    description: Joi.string().required().trim(),

    category: Joi.string().required().trim(),

    image: Joi.string().uri().allow("", null), // empty allowed, mongoose default will handle it

    date: Joi.string().required(),

    time: Joi.string().required(),

    duration: Joi.string().allow("", null),

    venue: Joi.string().required().trim(),

    teamSize: Joi.string().allow("", null),

    technologies: Joi.array().items(Joi.string().trim()).default([]),

    prizes: Joi.array().items(Joi.string().trim()).default([]),

    rules: Joi.array().items(Joi.string().trim()).default([]),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required().trim(),
  }).required(),
});

module.exports = { eventSchema, reviewSchema };
