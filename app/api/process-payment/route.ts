import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

export async function POST(req: Request) {
  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    return NextResponse.json(
      { error: "Checkout no configurado todavía." },
      { status: 503 }
    );
  }

  const body = await req.json();
  const client = new MercadoPagoConfig({ accessToken });
  const payment = new Payment(client);

  try {
    const result = await payment.create({
      body: {
        transaction_amount: body.transaction_amount,
        token: body.token,
        description: body.description,
        installments: body.installments,
        payment_method_id: body.payment_method_id,
        issuer_id: body.issuer_id,
        payer: body.payer,
      },
    });
    return NextResponse.json({
      status: result.status,
      status_detail: result.status_detail,
      id: result.id,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "No se pudo procesar el pago." },
      { status: 500 }
    );
  }
}
