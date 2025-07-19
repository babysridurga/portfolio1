'use server';

/**
 * @fileOverview AI-powered bio enhancement flow.
 *
 * - suggestBioImprovements - A function that suggests improvements to a bio based on the input.
 * - SuggestBioImprovementsInput - The input type for the suggestBioImprovements function.
 * - SuggestBioImprovementsOutput - The return type for the suggestBioImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBioImprovementsInputSchema = z.object({
  currentBio: z.string().describe('The current bio text.'),
  education: z.string().describe('The education details of the student.'),
  workExperience: z.string().describe('The work experience of the student.'),
});
export type SuggestBioImprovementsInput = z.infer<typeof SuggestBioImprovementsInputSchema>;

const SuggestBioImprovementsOutputSchema = z.object({
  improvedBio: z.string().describe('The AI-suggested improved bio text.'),
});
export type SuggestBioImprovementsOutput = z.infer<typeof SuggestBioImprovementsOutputSchema>;

export async function suggestBioImprovements(input: SuggestBioImprovementsInput): Promise<SuggestBioImprovementsOutput> {
  return suggestBioImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBioImprovementsPrompt',
  input: {schema: SuggestBioImprovementsInputSchema},
  output: {schema: SuggestBioImprovementsOutputSchema},
  prompt: `You are an AI assistant helping students improve their personal bios.

  Based on the student's current bio, education, and work experience, suggest an improved bio that highlights their skills and experience effectively.

  Current Bio: {{{currentBio}}}
  Education: {{{education}}}
  Work Experience: {{{workExperience}}}

  Improved Bio:`, 
});

const suggestBioImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestBioImprovementsFlow',
    inputSchema: SuggestBioImprovementsInputSchema,
    outputSchema: SuggestBioImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
