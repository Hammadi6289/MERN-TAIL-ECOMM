const stripe = require("../../config/stripe");
const userModel = require("../../models/userModel");

const paymentController = async (request, response) => {
  try {
    const { cartItems } = request.body;
    console.log("cartItems", cartItems);
    const user = await userModel.findOne({ _id: request.userId });
    // console.log("userID", user);
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        {
          shipping_rate: "shr_1Pqr8dDvSLFePuaHubGdYcAm",
        },
      ],
      customer_email: user.email,
      metadata: {
        userId: request.userId,
      },
      line_items: cartItems.map((item) => {
        const price = item.productId.sellingPrice;
        const images = item.productId.productImage.filter((img) => img); // Filter out empty strings, null, or undefined values
        return {
          price_data: {
            currency: "gbp",
            product_data: {
              name: item.productId.productName,
              images: images, // Use the filtered array
              //images: item.productId.productImage, // Join array elements into a string
              metadata: {
                productId: item.productId._id,
              },
            },
            unit_amount: price * 100,

            //unit_amount: item.productId.sellingPrice * 100,
            //unit_amount: items,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),

      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      //cancel_url: "http://localhost:3000/cancel",
    };
    const session = await stripe.checkout.sessions.create(params);
    response.status(303).json(session);
  } catch (err) {
    response.json({
      error: true,
      success: false,
      message: err?.message || err,
    });
  }
};

module.exports = paymentController;
