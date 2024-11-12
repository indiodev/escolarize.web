import { API } from "@/lib/api";
import { Payment } from "@/models/payment.model";
import { MetaQuery, MetaResponse } from "@/models/query.model";

export default class AdministratorService {
  async paymentsPaginate(query: MetaQuery): Promise<MetaResponse<Payment[]>> {
    const { data } = await API.get('/administrator/payment/paginate', {
      params: { ...query }
    });
    return data;
  }

  async updatePaymentById(id: number): Promise<void> {
    await API.patch(`/administrator/payment/${id}`);
  }
}