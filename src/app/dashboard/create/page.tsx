'use client';

import PageHeading from '@/components/layout/heading';
import { CalendarIcon, DiamondPlusIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

const FormSchema = z.object({
	amount: z.number().min(1, 'Amount must be at least 1'),
	recipient: z
		.string()
		.email('Recipient must be a valid email address')
		.optional(),
	expiresAt: z.string().refine((dateStr) => {
		const date = new Date(dateStr);
		return date > new Date();
	}, 'Expiration date must be in the future'),
	message: z
		.string()
		.max(200, 'Message must be at most 200 characters')
		.optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function CreateGiftCardPage() {
	const form = useForm<FormData>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			amount: 0,
			recipient: '',
			expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
				.toISOString()
				.slice(0, 16), // Default to 1 month from now, formatted for datetime-local
			message: '',
		},
	});

	function onSubmit(data: FormData) {
		// Convert expiresAt string to Date for submission
		const submissionData = {
			...data,
			expiresAt: new Date(data.expiresAt),
		};
		console.log('Form submitted with data:', submissionData);
		console.log('expiresAt as Date:', submissionData.expiresAt); // This will be a Date object
	}

	return (
		<div>
			<PageHeading
				title="Create New Gift Card"
				icon={<DiamondPlusIcon className="h-5 w-5 text-neutral-500" />}
			/>

			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="bg-white rounded-lg p-5 border"
			>
				<FieldLegend>Gift Card Info</FieldLegend>
				<FieldDescription className="mb-5">
					Fill out the form below to create a new gift card.
				</FieldDescription>
				<FieldGroup>
					{/* ----- AMOUNT ----- */}
					<Controller
						name="amount"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="amount">
									Amount <small>(FLOW)</small>
								</FieldLabel>
								<Input
									{...field}
									id="amount"
									type="text"
									inputMode="decimal"
									autoComplete="off"
									aria-invalid={fieldState.invalid}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					{/* ----- RECIPIENT ----- */}
					<Controller
						name="recipient"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="recipient">
									Recipient Email (optional)
								</FieldLabel>
								<Input
									{...field}
									id="recipient"
									type="email"
									autoComplete="off"
									aria-invalid={fieldState.invalid}
								/>
								<FieldDescription>
									If you want to send the gift card to
									someone, enter their email address here.
									Otherwise, you can leave it blank and share
									the gift card code manually.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					{/* ----- MESSAGE ----- */}
					<Controller
						name="message"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="message">
									Message (optional)
								</FieldLabel>
								<Input
									{...field}
									id="message"
									type="text"
									autoComplete="off"
									aria-invalid={fieldState.invalid}
								/>
								<FieldDescription>
									Add a personal message to the gift card (max
									200 characters).
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					{/* ----- EXPIRES AT ----- */}
					<Controller
						name="expiresAt"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="expiresAt">
									Expiration Date
								</FieldLabel>
								<InputGroup>
									<InputGroupInput
										{...field}
										id="expiresAt"
										type="datetime-local"
										autoComplete="off"
										aria-invalid={fieldState.invalid}
									/>
									<InputGroupAddon align="inline-end">
										<Popover>
											<PopoverTrigger asChild>
												<InputGroupButton
													id="date-picker"
													variant="ghost"
													size="icon-xs"
													aria-label="Select expiration date"
												>
													<CalendarIcon />
													<span className="sr-only">
														Select expiration date
													</span>
												</InputGroupButton>
											</PopoverTrigger>
											<PopoverContent
												className="w-auto overflow-hidden p-0"
												align="end"
												alignOffset={-8}
												sideOffset={10}
											>
												<Calendar
													mode="single"
													selected={
														field.value
															? new Date(
																	field.value,
																)
															: undefined
													}
													month={
														field.value
															? new Date(
																	field.value,
																)
															: new Date()
													}
												/>
											</PopoverContent>
										</Popover>
									</InputGroupAddon>
								</InputGroup>
							</Field>
						)}
					/>
					<Field>
						<Button
							type="submit"
							size="lg"
							className="cursor-pointer"
						>
							Create Gift Card
						</Button>
					</Field>
				</FieldGroup>
			</form>
		</div>
	);
}
