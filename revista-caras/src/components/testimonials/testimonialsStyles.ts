import styled from 'styled-components';
import { MainTitleTemplate } from '../../theme/mixins';

export const TestimonialsSection = styled.section`
    .testimonials {

    display: flex;
    flex-direction: row;
    text-align: center;
    overflow-x: auto;
    overflow: hidden;
    scroll-behavior: smooth;
    position: relative;

        #testimonials-title {
            ${MainTitleTemplate}
        }
        
        .user-review-icon {
            width: 70px;
            height: 70px;
        }
        
        .testimonials section {
            margin: 25px;
        }
}

.testimonial-card {
    min-width: 300px;
    max-width: 300px;
    flex: 0 0 auto;
    padding-right: 20px;
}
`;