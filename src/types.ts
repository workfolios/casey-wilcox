/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details?: string;
  bulletPoints: string[];
  prominence: 'primary' | 'secondary' | 'developing';
  label?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CareerMetric {
  metric: string;
  label: string;
  context: string;
}

export interface ScopeItem {
  text: string;
  details?: string;
}
