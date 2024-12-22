"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import OrderItems from "@/components/specific/management-panel/orders/OrderItems";
import OrderDetails from "@/components/specific/management-panel/orders/OrderDetails";

import Button from "@/components/ui/Button";
import Point from "@/components/ui/Point";

import Bag from "@/components/svgs/Bag";

import { type Order } from "@/types/order.types";

type DetailsOrderModalProps = ModalInstanceProps & { order: Order };

function DetailsOrderModal({ isOpen, onClose, order }: DetailsOrderModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[768px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Bag />
                    جزئیات سفارش
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72" scrollable>
                <OrderItems items={order?.items} />
                <OrderDetails price={order?.amount} payAt={order?.updatedAt} />
                <Point>قیمت دوره‌ها مربوط به زمان حال هستند و مجموع مبلغ با احتساب تخفیفات محاسبه شده است</Point>
            </ModalBody>
            <ModalFooter>
                <Button size="lg" variant="filled-primary" className="w-full" onClick={onClose}>
                    متوجه شدم
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default DetailsOrderModal;
