
'use client';

import React from "react";
import {
  Modal,
  Input,
  Select,
  TimePicker,
  Button,
  Form,
} from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useAppointmentContext } from "../Context/AppointmentContext";

export default function AppointmentModal({ isModalOpen, setIsModalOpen, selectedSlot }) {
  const [form] = Form.useForm();
  const { allAppointments, setAllAppointments } = useAppointmentContext();

  const handleFinish = (values) => {
    console.log("Form values:", values);


    const newAppointment = {
        ...values,
        slot: selectedSlot || null,
        id: Date.now(), // optional unique id
      };
    
      setAllAppointments([...allAppointments, newAppointment]);    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={<span className="text-lg font-semibold">MAKE NEW APPOINTMENT</span>}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        {/* Name */}
        <Form.Item
          label="NAME"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter name" className="rounded-full" />
        </Form.Item>

        {/* Category */}
        <Form.Item
          label="CATEGORIES"
          name="category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select
            placeholder="Select category"
            className="w-full rounded-full"
            options={[
              { label: "Consultation", value: "consultation" },
              { label: "Follow-up", value: "followup" },
            ]}
          />
        </Form.Item>

        {/* Doctor */}
        <Form.Item
          label="DOCTORS"
          name="doctor"
          rules={[{ required: true, message: "Please select a doctor" }]}
        >
          <Select
            placeholder="Select doctor"
            className="w-full rounded-full"
            options={[
              { label: "Dr. Smith", value: "smith" },
              { label: "Dr. Jane", value: "jane" },
            ]}
          />
        </Form.Item>

        {/* Start and End Time */}
        <div className="flex justify-between gap-3">
          <Form.Item
            className="w-1/2"
            label="START TIME"
            name="startTime"
            rules={[{ required: true, message: "Select start time" }]}
          >
            <TimePicker
              className="w-full"
              suffixIcon={<ClockCircleOutlined />}
              format="HH:mm"
            />
          </Form.Item>

          <Form.Item
            className="w-1/2"
            label="END TIME"
            name="endTime"
            rules={[{ required: true, message: "Select end time" }]}
          >
            <TimePicker
              className="w-full"
              suffixIcon={<ClockCircleOutlined />}
              format="HH:mm"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="mt-2 rounded-full bg-blue-700 hover:bg-blue-800"
          >
            MAKE NEW APPOINTMENT
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
