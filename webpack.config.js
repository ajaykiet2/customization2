module.exports = {
    module: {
      rules: [
        {
            test: /\.less$/, 
            loader: 'style!css!less'
        },
      ],
    },
  };