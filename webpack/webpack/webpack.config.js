const path = require("path");
const { LoaderOptionsPlugin } = require("webpack");

module.exports = {

    entry:"./src/index.js",
    output:{

        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
    },
    mode :"development",
    module: { rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] },{
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: "file-loader?name=/public/icons/[name].[ext]"
    }
    ] },

}