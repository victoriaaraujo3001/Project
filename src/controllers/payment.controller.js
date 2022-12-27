const MercadoPago = require("mercadopago");

MercadoPago.configure({
  sandbox: true,
  access_token:
    "TEST-4893545853274961-122609-2ed3f4b104be50ebe2629b0cde1da9d2-1272980323",
});

exports.Payment = async (req, res, next) => {
  let id = String(Date.now());
  const { nome } = req.params;
  const { total } = req.params;
  try {
    const dados = {
      items: [
        (item = {
          id: 1,
          title: nome,
          quantity: 1,
          currency_id: "BRL",
          unit_price: parseFloat(total),
        }),
      ],
      payer: {
        email: "pedrocoelho312@edu.unifor.br",
      },
      external_reference: id,
    };
    const pagamento = await MercadoPago.preferences.create(dados);
    console.log(pagamento);
    res.status(200).redirect(pagamento.body.init_point);
  } catch (error) {
    res
      .status(error.status || 404)
      .send({ message: error.message, description: error.description });
  }
};
