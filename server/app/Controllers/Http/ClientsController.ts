import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client';

export default class ClientsController {
  public async store ({ request }: HttpContextContract) {
    const clientPayload = request.only(['email', 'name', 'phone']);
    const client = await Client.create(clientPayload);
    return {
      message: "Client has been created!",
      data: client,
    }
  }
  public async index () {
    const clients = await Client.all();
    return {
      message: "Getting all the clients...",
      data: clients,
    }
  }
  public async show ({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id);
    return {
      message: "Returning the client",
      data: client,
    }
  }
  public async destroy ({ params }: HttpContextContract) {
    const clientToDestroy = await Client.findOrFail(params.id);
    await clientToDestroy.delete();
    return {
      message: "Deleting client...",
      data: clientToDestroy,
    }
  }
  public async update ({ params, request }: HttpContextContract) {
    const clientNewAttributes = await request.body();
    const client = await Client.findOrFail(params.id);

    client.name = clientNewAttributes.name;
    client.phone = clientNewAttributes.phone;
    client.email = clientNewAttributes.email;

    await client.save()

    return {
      message: "Editting client...",
      data: client,
    }
  }
}
