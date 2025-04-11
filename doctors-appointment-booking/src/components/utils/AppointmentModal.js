'use client';

import React, { useEffect } from "react";
import {
  Modal,
  Input,
  Select,
  TimePicker,
  Button,
  Form,
  Space,
  message,
  notification,
} from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useAppointmentContext } from "../Context/AppointmentContext";

export default function AppointmentModal({
  isModalOpen,
  setIsModalOpen,
  selectedSlot,
  setSelectedSlot,
}) {
  const [form] = Form.useForm();
  const { allAppointments, setAllAppointments } = useAppointmentContext();

  const currentAppointment = allAppointments.find(
    (appt) =>
      appt.slot?.day === selectedSlot?.day &&
      appt.slot?.time === selectedSlot?.time
  );

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description,
    });
  };

  useEffect(() => {
    if (isModalOpen && currentAppointment) {
      form.setFieldsValue({
        name: currentAppointment.name,
        category: currentAppointment.category,
        doctor: currentAppointment.doctor,
        startTime: currentAppointment.startTime
          ? dayjs(currentAppointment.startTime, "HH:mm")
          : null,
        endTime: currentAppointment.endTime
          ? dayjs(currentAppointment.endTime, "HH:mm")
          : null,
      });
    } else {
      form.resetFields();
    }
  }, [isModalOpen, currentAppointment, form]);

  const handleFinish = (values) => {
    const updatedAppointment = {
      ...values,
      slot: selectedSlot || null,
      id: currentAppointment?.id || Date.now(),
      startTime: values.startTime?.format("HH:mm"),
      endTime: values.endTime?.format("HH:mm"),
    };

    if (currentAppointment) {
      setAllAppointments((prev) =>
        prev.map((appt) =>
          appt.id === currentAppointment.id ? updatedAppointment : appt
        )
      );
      openNotificationWithIcon(
        "success",
        "Appointment Updated",
        "Your appointment was successfully updated."
      );
    } else {
      setAllAppointments((prev) => [...prev, updatedAppointment]);
      openNotificationWithIcon(
        "success",
        "Appointment Created",
        "Your new appointment was successfully scheduled."
      );
    }

    handleClose();
  };

  const handleDelete = () => {
    setAllAppointments((prev) =>
      prev.filter((appt) => appt.id !== currentAppointment.id)
    );
    openNotificationWithIcon(
      "error",
      "Appointment Deleted",
      "Your new appointment was successfully deleted."
    );
    handleClose();
  };

  const handleClose = () => {
    form.resetFields();
    setSelectedSlot("");
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={
          <span className="text-lg font-semibold">
            {currentAppointment ? "EDIT APPOINTMENT" : "MAKE NEW APPOINTMENT"}
          </span>
        }
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="NAME"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter name" className="rounded-full" />
          </Form.Item>

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
            <Space className="w-full justify-between flex-wrap">
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-full bg-blue-700 hover:bg-blue-800 w-full "
              >
                {currentAppointment ? "UPDATE" : "MAKE NEW APPOINTMENT"}
              </Button>
              {currentAppointment && (
                <Button
                  danger
                  className="rounded-full w-full mt-2"
                  onClick={handleDelete}
                >
                  DELETE
                </Button>
              )}
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
